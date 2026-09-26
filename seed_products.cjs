const http = require('http');

async function seed() {
  const rawProducts = [
    {
      name: "Lumière Noire",
      subtitle: "Oud & Amber",
      price: 285,
      original_price: 340,
      category: "Oriental",
      badge: "Bestseller",
      is_featured: true,
      in_stock: true,
      sizes: ["30ml", "50ml", "100ml"],
      description: "A dark, mesmerising journey through smoky oud, rich amber, and velvety musk. Lumière Noire commands every room it enters.",
      notes: { top: ["Bergamot", "Saffron"], middle: ["Rose", "Oud"], base: ["Amber", "Musk", "Sandalwood"] }
    },
    {
      name: "Aurore Blanche",
      subtitle: "Floral & Musky",
      price: 195,
      category: "Floral",
      badge: "New",
      is_featured: true,
      in_stock: true,
      sizes: ["30ml", "50ml", "100ml"],
      description: "A luminous, ethereal floral with delicate petals of jasmine and peony, kissed by warm vanilla and white musk.",
      notes: { top: ["Neroli", "Lemon"], middle: ["Jasmine", "Peony", "Rose"], base: ["Vanilla", "White Musk", "Cedar"] }
    },
    {
      name: "Velours Noir",
      subtitle: "Woody & Dark",
      price: 320,
      category: "Woody",
      badge: "",
      is_featured: true,
      in_stock: true,
      sizes: ["50ml", "100ml"],
      description: "An intense, velvety composition of dark woods, leather, and smoked vetiver — crafted for those who dare to be different.",
      notes: { top: ["Black Pepper", "Cardamom"], middle: ["Leather", "Patchouli"], base: ["Smoked Vetiver", "Cedarwood"] }
    },
    {
      name: "Soleil d'Or",
      subtitle: "Citrus & Warm",
      price: 240,
      original_price: 275,
      category: "Citrus",
      badge: "Bestseller",
      is_featured: true,
      in_stock: true,
      sizes: ["30ml", "50ml", "100ml"],
      description: "A radiant sunburst of Mediterranean citrus wrapped in golden amber and sun-drenched woods.",
      notes: { top: ["Blood Orange", "Grapefruit"], middle: ["Neroli", "Orange Blossom"], base: ["Golden Amber", "Vetiver"] }
    }
  ];

  for (const p of rawProducts) {
    const postData = JSON.stringify(p);
    const req = http.request({
      hostname: '127.0.0.1',
      port: 8090,
      path: '/api/collections/products/records',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      console.log(`Created: ${p.name} - Status: ${res.statusCode}`);
    });

    req.on('error', (e) => console.error(e.message));
    req.write(postData);
    req.end();
  }
}

seed();
