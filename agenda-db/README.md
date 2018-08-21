#agenda-db

## Usage

``` js
const setupDatabase = requiere('agenda-db')

setupDatabase(config).then(db => {
    const { Agent, Metric } = db

}).catch(err => console.error(err))
```