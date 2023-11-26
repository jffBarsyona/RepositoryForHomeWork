const axios = require('axios');
const path = require('path');
const { Validator } = require('jsonschema');

describe('Books API Tests', () => {
  // URL API
  const apiUrl = 'https://fakerestapi.azurewebsites.net/api/v1/Books';

  // JSON схема
  const schemaPath = path.join(__dirname, 'booksAPIschema.v1.json');
  const bookSchema = require(schemaPath);

  // Функция JSON схемы
  const validateSchema = (schema, data) => {
    const validator = new Validator();
    const validationResult = validator.validate(data, schema);

    if (!validationResult.valid) {
      console.error(validationResult.errors);
    }
    expect(validationResult.valid).toBe(true);
  };

  // Тест для получения списка книг
  test('GET /books returns status code 200 and valid JSON schema', async () => {
    const response = await axios.get(apiUrl);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);

    response.data.forEach((book) => {
      validateSchema(bookSchema, book);
    });
  });

  // Тест для создания новой книги
  test('POST /books creates a new book and returns status code 200', async () => {
    const newBook = {
      title: 'New Book',
      description: 'Lorem ipsum',
      pageCount: 150,
      excerpt: 'Lorem ipsum dolor sit amet',
      publishDate: '2023-11-26T12:00:00.000Z',
    };

    const response = await axios.post(apiUrl, newBook);

    expect(response.status).toBe(200);
    validateSchema(bookSchema, response.data);
  });

  // Тест для получения конкретной книги по ID
  test('GET /books/:id returns status code 200 and valid JSON schema', async () => {
    const bookId = 1;
    const response = await axios.get(`${apiUrl}/${bookId}`);

    expect(response.status).toBe(200);
    validateSchema(bookSchema, response.data);
  });

  // Тест для обновления книги по ID
  test('PUT /books/:id updates the book and returns status code 200', async () => {
    const bookId = 1;
    const updatedBook = {
      title: 'Updated Book',
      description: 'Updated description',
      pageCount: 120,
      excerpt: 'Updated excerpt',
      publishDate: '2023-11-26T14:30:00.000Z',
    };

    const response = await axios.put(`${apiUrl}/${bookId}`, updatedBook);

    expect(response.status).toBe(200);
    validateSchema(bookSchema, response.data);
  });

  // Тест для удаления книги по ID
  test('DELETE /books/:id deletes the book and returns status code 200', async () => {
    const bookId = 1;
    const response = await axios.delete(`${apiUrl}/${bookId}`);

    expect(response.status).toBe(200);
  });
});

