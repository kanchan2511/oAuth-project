import passport from "passport"

export const getMe = (req,res) => {
    if(!req.user){
        return res.status(400).json({ authenticated: false })
    }

    res.json({
        authenticate: true,
        user: req.user
    })
}

export const logout = (req, res) => {
  req.logout(function (err) {
    if (err) return res.status(500).json({ message: "Logout failed" });

    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.json({ message: "Logged out successfully" });
    });
  });
};