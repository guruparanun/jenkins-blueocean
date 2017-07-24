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
        echo 'testing'
        bat 'npm run test'
      }
    }
  }
}