const logOutUser = (req, res) => {
  try {
    // invalidate the jwt
    res.status(200).cookie('token', '').json({
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
