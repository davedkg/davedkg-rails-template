import _ from "lodash"

export const COLORS = {
  "red": "#ff6b68",
  "pink": "#ff85af",
  "purple": "#d066e2",
  "deep-purple": "#673AB7",
  "indigo": "#3F51B5",
  "blue": "#2196F3",
  "light-blue": "#03A9F4",
  "cyan": "#00BCD4",
  "teal": "#39bbb0",
  "green": "#32c787",
  "light-green": "#8BC34A",
  "lime": "#CDDC39",
  "yellow": "#FFEB3B",
  "amber": "#ffc721",
  "orange": "#FF9800",
  "deep-orange": "#FF5722",
  "brown": "#795548",
  "grey": "#868e96",
  "dark-grey": "#343a40",
  "blue-grey": "#607D8B",
}

// Randomize first 16 colors
export const CHART_COLORS = _.shuffle(_.map(_.keys(COLORS), (key) => [key, COLORS[key]]).slice(0, 16))