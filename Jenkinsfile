pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'building'
        bat 'npm install'
      }
    }
    stage('test') {
      steps {
        parallel(
          "test": {
            echo 'testing 1'
            bat 'npm run test'
            
          },
          "test 3": {
            echo 'testing 2'
            bat 'npm run test3'
            
          }
        )
      }
    }
    stage('deploy') {
      steps {
        echo 'deploying'
      }
    }
  }
}