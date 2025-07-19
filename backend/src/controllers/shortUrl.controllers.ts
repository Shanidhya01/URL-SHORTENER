import mongoose from 'mongoose'
import { Request, Response } from 'express'
import { ShortUrlModel } from '../models/ShortUrl.model.js'
import { validateURL } from '../utils/validateUrl.js'

// @description: Get all URLs
// @route: /shortUrl
// @method: GET
export const getAllUrl = async (req: Request, res: Response): Promise<any> => {
  // Attempting to get all URLs
  try {
    // Fetching and storing URLs in a list
    const shortUrls = await ShortUrlModel.find().sort({ createdAt: -1 })
    // Returning an empty array if none are found
    if(shortUrls.length < 0) {
      return res.status(404).json({
        success: false,
        message: "Short URLs not found",
        shortUrls: []
      })
    }
    // Returning the URLs
    return res.status(200).json({
      success: true,
      message: "URLs successfully retrieved",
      shortUrls
    })
  } catch(error: any) {
    console.error(`Error fetching URLs: ${error.message || error}`)
    return res.status(500).json({
      success: false,
      message: "Internal server error while attempting to retrieve URLs",
      error: error.message || error
    })
  }
} // End of getAllUrl


// @description: Get an URL by id
// @route: /shortUrl/:id
// @method: GET
export const getUrl = async (req: Request, res: Response): Promise<any> => {
  // Getting the id from the request parameters
  let shortUrlId = req.params.id
  // Attempting to get the URL
  try {
    // Fetching the short URL
    let shortUrl = await ShortUrlModel.findOne({ shortUrl: shortUrlId })
    // If not found or does not exist
    if(!shortUrl) {
      return res.status(404).json({
        success: false,
        message: `URL with ID ${shortUrlId} not found`
      })
    }
    // Increasing & storing number of clicks
    shortUrl.clicks++
    await shortUrl.save()
    // Redirecting user to the original URL
    return res.redirect(`${shortUrl.fullUrl}`)
  } catch(error: any) {
    console.error(`Error retrieving URL with ID ${shortUrlId}: ${error.message || error}`)
    return res.status(500).json({
      success: false,
      message: "Internal server error while attempting to retrieve an URL by ID",
      error: error.message || error
    })
  }
} // End of getUrl


// @description: Create an URL
// @route: /shortUrl
// @method: POST
export const createUrl = async (req: Request, res: Response): Promise<any> => {
  // Getting the full URL from the body
  const { fullUrl }: { fullUrl: string } = req.body
  // Validating the request body
  if(!fullUrl || fullUrl.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: 'A valid URL is required'
    })
  }
  // Validating the URL format
  if(!validateURL(fullUrl)) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL format",
    })
  }
  // Attempting to create the short URL
  try {
    // Checking if the URL already exists in DB
    const urlFound = await ShortUrlModel.findOne({ fullUrl })
    if(urlFound) {
      return res.status(409).json({
        success: false,
        message: "URL already exists in the database",
        shortUrl: urlFound
      })
    } else {
      // Creating the short URL
      const shortUrl = await ShortUrlModel.create({ fullUrl })
      return res.status(201).json({
        success: true,
        message: "URL successfully created",
        shortUrl: shortUrl
      })
    }
  } catch(error: any) {
    console.error(`Error creating URL: ${error.messasge || error}`)
    return res.status(500).json({
      success: false,
      message: "Internal server error while attempting to create URL",
      error: error.message || error
    })
  }
} // End of createUrl


// @description: Delete an URL by id
// @route: /shortUrl/:id
// @method: DELETE
export const deleteUrl = async (req: Request, res: Response): Promise<any>=> {
  // Getting the id from the request parameters
  const shortUrlId = req.params.id
  // Validating if the provided ID is a valid MongoDB ObjectId
  if(!mongoose.Types.ObjectId.isValid(shortUrlId)) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL ID",
    })
  }
  // Attempting to delete the URL
  try {
    // Deleting the short URL
    const shortUrl = await ShortUrlModel.findByIdAndDelete(shortUrlId)
    // If not found or does not exist
    if(!shortUrl) {
      return res.status(404).json({
        success: false,
        message: `URL with ID ${shortUrlId} not found`
      })
    }
    // Successfully deleted
    return res.status(200).json({
      success: true,
      message: `URL with ID ${shortUrlId} successfully deleted`
    })
  } catch(error: any) {
    console.error(`Error deleting URL with ID ${shortUrlId}: ${error.message || error}`)
    return res.status(500).json({
      success: false,
      message: "Internal server error while attempting to delete an URL by ID",
      error: error.message || error
    })
  }
} // End of deleteUrl