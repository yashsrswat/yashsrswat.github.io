// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-yash-saraswat",
    title: "Yash Saraswat",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "cinema-in-defense-of-films-that-make-you-wait",
          title: 'In defense of films that make you wait',
          description: "An impression of slow cinema as a movement — what duration does that cutting can&#39;t.",
          section: "Cinema",handler: () => {
              window.location.href = "/cinema/on-slow-cinema/";
            },},{id: "cinema-the-room-at-the-end-of-wanting",
          title: 'The room at the end of wanting',
          description: "On Tarkovsky&#39;s Stalker, and a film that refuses to let desire arrive anywhere clean.",
          section: "Cinema",handler: () => {
              window.location.href = "/cinema/stalker-tarkovsky/";
            },},{id: "misc-travel",
          title: 'Travel',
          description: "A first time abroad, a Schengen visa, and the slow realization that I&#39;d rather not plan a thing. From Liège to — somehow — Munich.",
          section: "Misc",handler: () => {
              window.location.href = "/misc/travelling/";
            },},{id: "research-state-space-models-read-as-control-theory-in-disguise",
          title: 'State-space models, read as control theory in disguise',
          description: "Why the recent wave of state-space sequence models feels so familiar if you&#39;ve spent time around dynamics and control.",
          section: "Research",handler: () => {
              window.location.href = "/research/state-space-models-as-control/";
            },},{id: "research-gradient-descent-is-a-flow-we-keep-sampling-badly",
          title: 'Gradient descent is a flow we keep sampling badly',
          description: "Treating optimization as a continuous-time dynamical system, and what the discretization quietly costs us.",
          section: "Research",handler: () => {
              window.location.href = "/research/gradient-descent-as-a-flow/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
