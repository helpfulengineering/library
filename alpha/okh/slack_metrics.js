// Workspace stats
fetch("https://helpfulengineering.slack.com/api/team.stats.export", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "x=bt24utrzgn66xq6j5xdnz6mcb.1608320177; OptanonConsent=isIABGlobal=false&datestamp=Fri+Dec+18+2020+14%3A36%3A54+GMT-0500+(Eastern+Standard+Time)&version=6.10.0&hosts=&consentId=e709de3a-3983-4098-8abf-a0caf9008a37&interactionCount=1&landingPath=https%3A%2F%2Fhelpfulengineering.slack.com%2F%3Fredir%3D%252Fadmin&groups=C0004%3A0%2CC0002%3A1%2CC0003%3A1%2CC0001%3A1; d=Kb7NjzE7VnoBAAVdKvIIR29KIIkIi2yCRlr4yoS2BuNOWcuxcIxmb9FXb2w5nR%2BDMU5s%2FICCyBjITvn4DkhOxzT%2FSbW2N9VeGUEcuXVAn9L2eI2Z4L0X3zk2Mj86t0vOEUvn%2FbyuYdjzMuNRYvM8JyLH%2BHZoS2Io2HfPbIM1pwFjSulcgex7HtTW; d-s=1608320215; lc=1608320215; b=.bt24utrzgn66xq6j5xdnz6mcb; _gcl_au=1.1.158073886.1608320227; _ga=GA1.2.1714882442.1608320228; _gid=GA1.2.1781200962.1608320228; _gat_UA-56978219-1=1"
  },
  "referrerPolicy": "no-referrer",
  "body": "type=overview&date_range=30d&offline=false&token=xoxs-979916977921-1122613433446-1599907814257-9795ba435a239850cde42c800c2fbcc1ec738513e9ed8e10492e9f7456e3fd86",
  "method": "POST",
  "mode": "cors"
});


// Channels
fetch("https://helpfulengineering.slack.com/api/team.stats.export", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "x=bt24utrzgn66xq6j5xdnz6mcb.1608320177; OptanonConsent=isIABGlobal=false&datestamp=Fri+Dec+18+2020+14%3A36%3A54+GMT-0500+(Eastern+Standard+Time)&version=6.10.0&hosts=&consentId=e709de3a-3983-4098-8abf-a0caf9008a37&interactionCount=1&landingPath=https%3A%2F%2Fhelpfulengineering.slack.com%2F%3Fredir%3D%252Fadmin&groups=C0004%3A0%2CC0002%3A1%2CC0003%3A1%2CC0001%3A1; d=Kb7NjzE7VnoBAAVdKvIIR29KIIkIi2yCRlr4yoS2BuNOWcuxcIxmb9FXb2w5nR%2BDMU5s%2FICCyBjITvn4DkhOxzT%2FSbW2N9VeGUEcuXVAn9L2eI2Z4L0X3zk2Mj86t0vOEUvn%2FbyuYdjzMuNRYvM8JyLH%2BHZoS2Io2HfPbIM1pwFjSulcgex7HtTW; d-s=1608320215; lc=1608320215; b=.bt24utrzgn66xq6j5xdnz6mcb; _gcl_au=1.1.158073886.1608320227; _ga=GA1.2.1714882442.1608320228; _gid=GA1.2.1781200962.1608320228; _gat_UA-56978219-1=1"
  },
  "referrerPolicy": "no-referrer",
  "body": "type=channels&date_range=30d&cols=name%2Cdate_create%2Ctotal_members_count%2Cmessages_count%2Cwriters_count%2Creaders_count%2Cwriters_percentage&sort_prefix=name&sort_dir=asc&offline=false&token=xoxs-979916977921-1122613433446-1599907814257-9795ba435a239850cde42c800c2fbcc1ec738513e9ed8e10492e9f7456e3fd86",
  "method": "POST",
  "mode": "cors"
});

// Members
fetch("https://helpfulengineering.slack.com/api/team.stats.export", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "x=bt24utrzgn66xq6j5xdnz6mcb.1608320177; OptanonConsent=isIABGlobal=false&datestamp=Fri+Dec+18+2020+14%3A36%3A54+GMT-0500+(Eastern+Standard+Time)&version=6.10.0&hosts=&consentId=e709de3a-3983-4098-8abf-a0caf9008a37&interactionCount=1&landingPath=https%3A%2F%2Fhelpfulengineering.slack.com%2F%3Fredir%3D%252Fadmin&groups=C0004%3A0%2CC0002%3A1%2CC0003%3A1%2CC0001%3A1; d=Kb7NjzE7VnoBAAVdKvIIR29KIIkIi2yCRlr4yoS2BuNOWcuxcIxmb9FXb2w5nR%2BDMU5s%2FICCyBjITvn4DkhOxzT%2FSbW2N9VeGUEcuXVAn9L2eI2Z4L0X3zk2Mj86t0vOEUvn%2FbyuYdjzMuNRYvM8JyLH%2BHZoS2Io2HfPbIM1pwFjSulcgex7HtTW; d-s=1608320215; lc=1608320215; b=.bt24utrzgn66xq6j5xdnz6mcb; _gcl_au=1.1.158073886.1608320227; _ga=GA1.2.1714882442.1608320228; _gid=GA1.2.1781200962.1608320228"
  },
  "referrerPolicy": "no-referrer",
  "body": "type=users&date_range=30d&cols=name%2Caccount_type%2Caccount_created%2Cworkspaces%2Cdays_active%2Cchats_sent%2Call_channel_chats_count%2Creactions_added_count&sort_prefix=name&sort_dir=asc&offline=false&token=xoxs-979916977921-1122613433446-1599907814257-9795ba435a239850cde42c800c2fbcc1ec738513e9ed8e10492e9f7456e3fd86",
  "method": "POST",
  "mode": "cors"
});

fetch("https://helpfulengineering.slack.com/api/team.stats.export", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "x=bt24utrzgn66xq6j5xdnz6mcb.1608320177; OptanonConsent=isIABGlobal=false&datestamp=Fri+Dec+18+2020+14%3A36%3A54+GMT-0500+(Eastern+Standard+Time)&version=6.10.0&hosts=&consentId=e709de3a-3983-4098-8abf-a0caf9008a37&interactionCount=1&landingPath=https%3A%2F%2Fhelpfulengineering.slack.com%2F%3Fredir%3D%252Fadmin&groups=C0004%3A0%2CC0002%3A1%2CC0003%3A1%2CC0001%3A1; d=Kb7NjzE7VnoBAAVdKvIIR29KIIkIi2yCRlr4yoS2BuNOWcuxcIxmb9FXb2w5nR%2BDMU5s%2FICCyBjITvn4DkhOxzT%2FSbW2N9VeGUEcuXVAn9L2eI2Z4L0X3zk2Mj86t0vOEUvn%2FbyuYdjzMuNRYvM8JyLH%2BHZoS2Io2HfPbIM1pwFjSulcgex7HtTW; d-s=1608320215; lc=1608320215; b=.bt24utrzgn66xq6j5xdnz6mcb; _gcl_au=1.1.158073886.1608320227; _ga=GA1.2.1714882442.1608320228; _gid=GA1.2.1781200962.1608320228"
  },
  "referrerPolicy": "no-referrer",
  "body": "type=users&date_range=30d&cols=name%2Cuser_id%2Cusername%2Caccount_type%2Caccount_created%2Cworkspaces%2Cis_billable_seat%2Cdays_active%2Cdesktop_days_active%2Candroid_days_active%2Cios_days_active%2Cchats_sent%2Call_channel_chats_count%2Creactions_added_count%2Clast_activity%2Clast_activity_desktop%2Clast_activity_android%2Clast_activity_ios&sort_prefix=name&sort_dir=asc&offline=false&token=xoxs-979916977921-1122613433446-1599907814257-9795ba435a239850cde42c800c2fbcc1ec738513e9ed8e10492e9f7456e3fd86",
  "method": "POST",
  "mode": "cors"
});