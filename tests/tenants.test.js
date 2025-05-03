const request = require('supertest');
const app = require('../index');
const { tenants } = require('../routes/tenants');



describe('Tenant API', () => {
  it('should return tenant details for a valid ID', async () => {
    const res = await request(app).get(`/api/tenants/${tenants[0].id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Tenant A');
  });

  it('should return 404 for invalid tenant ID', async () => {
    const res = await request(app).get('/api/tenants/invalid-id');
    expect(res.statusCode).toBe(404);
  });

  it('should return config for valid tenant', async () => {
    const res = await request(app).get(`/api/config/${tenants[1].id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.theme).toBe('light');
  });

  it('should return 404 for config of invalid tenant', async () => {
    const res = await request(app).get('/api/config/invalid-id');
    expect(res.statusCode).toBe(404);
  });
});