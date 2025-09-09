// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Birmingham",
    scale: "C",
  },
  clock: {
    format: "h:i",
    icon_color: palette.maroon,
  },
  additionalClocks: [
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "fmhy",
              url: "https://fmhy.net/",
              icon: "free-rights",
              icon_color: palette.mauve,
            },
            {
              name: "steamdb",
              url: "https://steamdb.info/",
              icon: "database",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "outlook",
              url: "https://outlook.office.com/mail/",
              icon: "mail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://outlook.office.com/calendar",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "current events wiki",
              url: "https://en.wikipedia.org/wiki/Portal:Current_events",
              icon: "world",
              icon_color: palette.green,
            },
            {
              name: "good news network",
              url: "https://www.goodnewsnetwork.org/",
              icon: "news",
              icon_color: palette.peach,
            },
            {
              name: "phys",
              url: "https://phys.org/",
              icon: "atom",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "study",
      background_url: "src/img/banners/banner_05.gif",
      categories: [
        {
          name: "research",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "wikipedia",
              url: "https://www.wikipedia.org/",
              icon: "brand-wikipedia",
              icon_color: palette.peach,
            },
            {
              name: "stackexchange",
              url: "https://stackexchange.com/",
              icon: "stack",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "university",
          links: [
            {
              name: "myuob",
              url: "https://myuob.bham.ac.uk/",
              icon: "abacus",
              icon_color: palette.green,
            },
            {
              name: "canvas",
              url: "https://canvas.bham.ac.uk/",
              icon: "artboard",
              icon_color: palette.peach,
            },
            {
              name: "intranet",
              url: "https://intranet.birmingham.ac.uk/account/login.aspx",
              icon: "help",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "feynman lectures",
              url: "https://www.feynmanlectures.caltech.edu/",
              icon: "notebook",
              icon_color: palette.green,
            },
            {
              name: "simulations",
              url: "https://www.csun.edu/science/software/simulations/physics.html",
              icon: "circles-relation",
              icon_color: palette.peach,
            },
            {
              name: "tib av-portal",
              url: "https://av.tib.eu/",
              icon: "chalkboard",
              icon_color: palette.red,
            },
            {
              name: "openstax",
              url: "https://openstax.org/",
              icon: "book-2",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: palette.blue,
            },
            {
              name: "last.fm",
              url: "https://www.last.fm/home",
              icon: "music",
              icon_color: palette.peach,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "soundcloud",
              url: "http://soundcloud.com/",
              icon: "brand-soundcloud",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "cs.rin.ru",
              url: "https://cs.rin.ru/forum",
              icon: "skull",
              icon_color: palette.red,
            },
            {
              name: "online-fix",
              url: "https://online-fix.me/",
              icon: "network",
              icon_color: palette.blue
            },
          ],
        },
        {
          name: "anime",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "myanimelist",
              url: "https://myanimelist.net/",
              icon: "book",
              icon_color: palette.peach,
            },
            {
              name: "animekai",
              url: "https://animekai.to/",
              icon: "movie",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
