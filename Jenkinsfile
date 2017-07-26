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
          "test 2": {
            echo 'testing 2'
            bat 'jest third.spec'
            
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