require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADw46Vp5dhSATgQAAHEHAAAKAAAAY3JlZHMuanNvbpVV27KiOBT9l7xqtSIgl6pTNYh4Q9TjXabmIUCAKARMAoJd*vsU2qdPP8z0nOEpJLv2XnvttZLvgGSYIRvVQP8OcopLyFGz5HWOgA4GRRgiCtoggBwCHezGdWuWLu3haVRbimNVHY5zy9xfUbpk3qoIxe3AT+U4Hjlv4NEGeeEl2P9NQg9Ojlexhgn03Koa3Mbb9dGXu5a*DrfF1V2bkm1dFIX36*c38GgyQkwxiaw8RimiMLFRvYKYfg2+OezOF8EdWu+iaoVXHHd7OyGFcGTk3VApa4s4UZ2XG6kXfQ3+pG8Z4ymyrzfFO9GBG8c83cPcPJSj2nF930Z4O4rj6mj4L*gMRwQF0wARjnn9Zd6lecfupPML7dP5qeiZh3J42qUa3wj5bX+LqkJglTFamiSdfg340eMhEQR5Y*fm9Nw9mlvi+5Vsah1hrdYTZzlLpLk0seTE+hX4in5o5fJ*eC9m60ssdghj6GSfNqYqBkNpks82IUmYPTjezSK6TLsxT7OvwS861b7Tj6zFoI7O2bDEpDpb61V+75cmroLo3V1gKojl6j37hA95QX+HMrYKWcInj+y8qifuzO7eyiayeR9L9Iwu*Z7l91QTTkcLOtZcW62XtXuTNta0upgWPp+vmjJzBkg5VNI5GMVkK0nUjaO3Z0cXVE8DoAuPNqAowoxTyHFGnntSG8Cg3CCfIv5kF6QnmewuZO6ttOmapmoicfcwDOSxN2G7qpObDhtvtn7IPOMNtEFOMx8xhoIJZjyjtYMYgxFiQP*zrzYgqOKvuTXVRKENQkwZ35EiTzIYfAz14xD6flYQvqmJbzYLRIHe*dxGnGMSsYbGgkDqx7hEZgw5A3oIE4Z+NogoCoDOaYF+mtbMgoZ3e3A82OphAdogfc4DB0AHPVlSBEWW+6qq6kL*D*bt1qSFef6NIA7aIHmF9QRB0xRFUjRRk5+RzcHjJ8ImYYA4xAlrHO9M7NtVHVqLPikcZzw2LpFhRgb47OhDGS*qhVUH1UItyEf57LFybrv++nArcQveO8m6h4plfRfUXb45qG**kATo4OB1o0np7jZJ32vV1pIbt6SYWSXllM200xlW2nUo++Itmt6Taq6tbMcJRFcIcqistFjdKagPA7veG1vBOpSelW+3w9tbUy1AJfbRr8VcQ0Qnd6Ke03uZuAWMNQ+7C7dQ+*OAhsXubJ9azDwd1eR27sVS7W3EsHB849RK41F5c2ZVzYuOIXheUoWtCfH68wDfXpp9eib5cVfhp5yaWTW*IUZP6xPYTPC*Z*cC3kis+2j*kuPHZfIvhhwE247IuM*RvnXqKfO6To*Wns2lMmUdeRcQemZMC0f2LinB4*FXG+QJ5GFGU6ADSAKa4QC0Ac2KRrNTEma*exuM7tT64dYEMm58+mCLU8Q4THOgC4rc60qSLIivqBXN8glkMdCBuNZcUWtEXRt5vuGQf9gKGM1nIRE8*gZQSwECFAMUAAAICAA8OOlaeXYUgE4EAABxBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB2BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Branitho',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
