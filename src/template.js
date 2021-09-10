const newManagerCard = (manager) => {
    return `       <div class="column mt-6 is-4">
    <div class="card">
        <div class="card-header-title is-size-4 has-background-primary">${manager.name}<br>Manager</div>
        <div class="card-content is-size-5">
            <p><b>ID:</b> ${manager.id}</p>
            <p><b>Email:</b> ${manager.email}</p>
            <p><b>Office Number:</b> ${manager.officeNumber}</p>
        </div>
    </div>
</div>`
}

const newEngineerCard = (engineer) => {
      return `      <div class="column mt-6 is-4">
      <div class="card">
          <div class="card-header-title is-size-4 has-background-primary">${engineer.name}<br>Engineer</div>
          <div class="card-content is-size-5">
              <p><b>ID:</b> ${engineer.id}</p>
              <p><b>Email:</b> ${engineer.email}</p>
              <p><b>GitHub:</b> ${engineer.github}</p>
          </div>
      </div>
  </div>`
}

const newInternCard = (intern) => {
    return `        <div class="column mt-6 is-4">
    <div class="card">
        <div class="card-header-title is-size-4 has-background-primary">${intern.name}<br>Intern</div>
        <div class="card-content is-size-5">
            <p><b>ID:</b> ${intern.id}</p>
            <p><b>Email:</b> ${intern.email}</p>
            <p><b>School:</b> ${intern.school}</p>
        </div>
    </div>
</div>`
}

const htmlFile = (content) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <title>My Awesome Team!</title>
</head>
<body>

<section class="hero is-primary">
    <div class="hero-body has-text-centered">
        <p class="title is-size-1">My Awesome Team!</p>
    </div>
</section>

<div class="section">
    <div class="container">
        <div class="columns mt-5 is-8 is-variable is-flex-wrap-wrap is-justify-content-center">
        ${content}
        </div>
    </div>
</div>
      
</body>
</html>`

module.exports = {newManagerCard, newEngineerCard, newInternCard, htmlFile}