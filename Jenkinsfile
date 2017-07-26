pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'building'
        bat 'npm install'
      }
    }
    stage('Tests') {
      steps {
        parallel(
          "Tests": {
            echo 'testing 1'
            bat 'npm run test'
            
          },
          "Tests 3": {
            echo 'testing 3'
            bat 'npm run test3'
            
          }
        )
      }
    }
    stage('Deploy') {
      steps {
        echo 'deploying'
        echo 'end'
      }
    }
  }
}