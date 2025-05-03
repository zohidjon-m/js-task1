const express = require('express');
const app = express();
const tenantRoutes = require('./routes/tenants');

app.use(express.json());
app.use('/api', tenantRoutes);

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
}

module.exports = app;