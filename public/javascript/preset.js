const presets = [
  ["", "", "", "", ""],
  [
    "mysql-heroku",
    "mysql",
    "us-cdbr-iron-east-02.cleardb.net",
    "3306",
    "heroku_126abff0eac31c8",
    "bf05d3bb2265c3",
    "fc67f770",
  ],
  [
    "mysql-template",
    "mysql",
    "localhost",
    "3306",
    "database",
    "user",
    "password",
  ],
  [
    "postgreql-template",
    "postgresql",
    "localhost",
    "5432",
    "database",
    "user",
    "password",
  ],
  [
    "oracle-template",
    "oracle",
    "localhost",
    "1521",
    "database",
    "user",
    "password",
  ],
];

const csspresets = ["default.css", "mono.css", "terminal.css"];

function loadPreset() {
  for (var i = 0; i < presets.length; i++) {
    $("#preset").append($("<option>").html(presets[i][0]).val(i));
  }

  for (var i = 0; i < csspresets.length; i++) {
    $("<option>")
      .html(csspresets[i])
      .val(csspresets[i])
      .attr("id", csspresets[i]);
    $("#css-list").append($("<option>").html(csspresets[i]).val(csspresets[i]));
  }
}
