const router = require('express')();

router.get('/header', (req, res) => {
  res.json({
    weather: {
      icon: 'day-thunderstorm',
      title: 'fucking shitstorm',
    },
    ticker: {
      title: 'alternative facts',
      value: '+10',
      style: 'green',
    },
    taxReturns: {
      released: false,
    },
  })
});

module.exports = router;
