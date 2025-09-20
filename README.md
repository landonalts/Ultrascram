# ultrascram

Node.js proxy service deployable to Vercel.  
Choose your proxy mode via the API:

- **Ultraviolet:** Web proxy for bypassing filters.
- **Scramjet:** Stream proxy for data transformations.

## Usage

Send requests to `/api/proxy` with a query parameter:

- `GET /api/proxy?type=scramjet` — Uses Scramjet stream proxy.
- `GET /api/proxy?type=ultraviolet` — Uses Ultraviolet web proxy.

## Local setup

```bash
git clone https://github.com/landonalts/ultrascram.git
cd ultrascram
npm install
npm run dev
```

## License

MIT
