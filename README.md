# Real-time traffic visualization
> Website that displays real time traffic data of Flanders.

![](header.png)


## Project info

The government of Belgium has real-time data about the traffic in Flanders. This project will provide an api to make the data more compact and easy to use. It will also feature front end with some interesting visualisations.

The data is available from these URL's:

- raw data: http://miv.opendata.belfla.be/miv/verkeersdata
- some explanation: http://miv.opendata.belfla.be/miv-verkeersdata.xsd
- more explanation: http://miv.opendata.belfla.be/miv-config.xsd
- location data: http://miv.opendata.belfla.be/miv/configuratie/xml


## Development setup

#### Scraping

```bash
cd backend/scraper
virtualenv venv
source venv/bin/activate
pip install -r requirements.py
python data_updater.py
```

#### API

Only serves static json, so probably better to let a webserve like nginx handle this.

```bash
cd backend
npm install
npm start
```

#### Frontend

Only serves static content, so best to let a webserver like nginx serve only the `index.html`, `style.css` and `dist/bundle.js` files.

```bash
cd frontend
npm install
```

To run development server:
```bash
npm start
```

To build the src files:
```bash
npm build
```

## Release History

* 0.0.1
    * Work in progress

## Meta

[Tristan Trouwen](https://tristantrouwen.com) – [@tristantrouwen](https://twitter.com/tristantrouwen)

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/trirpi/RT-traffic-visualization](https://github.com/trirpi)

## Contributing

1. Fork it (<https://github.com/yourname/RT-traffic-visualization/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Todo

1. Create better guide to get it working in production
2. Put a server online that actually works
3. Make everything informative (legend, better explenation)
4. Make blue-orange mode work
5. Ask dataset owners permission to scrape every minute or so.

