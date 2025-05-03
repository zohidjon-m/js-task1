const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const tenants = [
  {
    id: uuidv4(),
    name: 'Tenant A',
    domain: 'tenant-a.example.com',
    config: {
      enableRealtimeChat: true,
      theme: 'dark'
    }
  },
  {
    id: uuidv4(),
    name: 'Tenant B',
    domain: 'tenant-b.example.com',
    config: {
      enableRealtimeChat: false,
      theme: 'light'
    }
  }
];

router.get('/tenants/:id', (req, res) => {
  const tenant = tenants.find(t => t.id === req.params.id);
  if (!tenant) return res.status(404).json({ message: 'Tenant not found' });
  res.json(tenant);
});

router.get('/config/:tenantId', (req, res) => {
  const tenant = tenants.find(t => t.id === req.params.tenantId);
  if (!tenant) return res.status(404).json({ message: 'Tenant config not found' });
  res.json(tenant.config);
});

module.exports = router;
module.exports.tenants = tenants;
console.log(tenants);
