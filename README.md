## Project Manager SOA

Application for manage projects

## Usage

    git clone https://github.com/williansouzagonc/project-management-soa.git
    cd project-management-sia
    docker-compose up

## Debugging

    ```
    npm i
    cp .env.example .env
    docker-compose run mongo
    npm start
    ```

## Running tests

    ```
    npm i
    cp .env.example .env
    npm test
    ```

## Improvements

- Docs (OpenAPI, Swagger)
- Better logs
- Better error handling
- Tests (Due to simplicity of the api and lack of time I didn't include tests)
- Authentication (JWT, BasicAuth)
- Pagination