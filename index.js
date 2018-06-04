exports.identify = function(phone) {
    if (phone.startsWith("+25470")) return "safaricom"
    if (phone.startsWith("+25471")) return "safaricom"
    if (phone.startsWith("+25472")) return "safaricom"
    if (phone.startsWith("+25473")) return "airtel"
    if (phone.startsWith("+25474")) {
        if (phone.startsWith("+254747")) return "faiba"
        else return "safaricom"
    }
    if (phone.startsWith("+25475")) return "airtel"
    if (phone.startsWith("+25476")) return "equitel"
    if (phone.startsWith("+25477")) return "telkom"
    if (phone.startsWith("+25478")) return "airtel"
    if (phone.startsWith("+25479")) return "safaricom"

    return "unknown"
}
