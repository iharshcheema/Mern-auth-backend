const logOutUser = (req, res) => {
  try {
    // invalidate the jwt
    res
      .status(200)
      .cookie('token', '', {
        httpOnly: true,
        sameSite: 'None', // Required for cross-origin cookies
        // secure: true, // Ensure this is enabled if served over HTTPS
        expires: new Date(0), // Immediately expire the cookie
      })
      .json({
        success: true,
        message: 'User has been logout',
      })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      message: 'ERROR while Logging Out hte user occurred',
    })
  }
}
module.exports = logOutUser
