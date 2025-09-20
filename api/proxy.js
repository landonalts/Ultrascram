const { DataStream } = require('scramjet');
// Placeholder for Ultraviolet integration
// const { createServer: createUVServer } = require('@ultraviolet-proxy/ultraviolet');

module.exports = async (req, res) => {
  const type = req.query.type;

  if (type === 'scramjet') {
    res.setHeader('Content-Type', 'text/plain');
    DataStream.from(['Hello', 'from', 'Scramjet!'])
      .map(str => str.toUpperCase())
      .pipe(res);
  } else if (type === 'ultraviolet') {
    // TODO: Integrate Ultraviolet proxy here
    res.status(200).send('Ultraviolet proxy endpoint (integration required)');
  } else {
    res.status(400).send('Please specify type=scramjet or type=ultraviolet');
  }
};