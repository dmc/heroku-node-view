const presets = [
    [ "", "", "", "", "" ],
    [ "postgreql-heroku", "postgresql", "ec2-174-129-254-216.compute-1.amazonaws.com",
            "5432", "da3a0k5tua6qv2", "rzcfpiirtceqhp",
            "666d25672e8323637b344bbecaf30d6594651788340cf58f9d2fb96e458a4f94" ],
    [ "mysql-heroku", "mysql", "us-cdbr-iron-east-02.cleardb.net",
            "3306", "heroku_126abff0eac31c8", "bf05d3bb2265c3",
            "fc67f770" ],
    [ "mysql-template", "mysql", "localhost", "3306", "database",
            "user", "password" ],
    [ "postgreql-template", "postgresql", "localhost", "5432", "database",
            "user", "password" ],
    [ "oracle-template", "oracle", "localhost", "1521", "database",
            "user", "password" ] ];

const csspresets =
    ["default.css",
    "light.css",
    "dark.css",
    "terminal.css"];

function loadPreset() {
    for (var i = 0; i < presets.length; i++) {
        $("#preset").append($('<option>').html(presets[i][0]).val(i));
    }

    for (var i = 0; i < csspresets.length; i++) {
        var $option = $('<option>').html(csspresets[i]).val(csspresets[i])
                .attr('id', csspresets[i]);
        $("#css-list").append(
                $('<option>').html(csspresets[i]).val(csspresets[i]));
    }
}
