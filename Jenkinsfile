pipeline {
  agent any
  stages {
    stage('git pull') {
      steps {
        checkout scm
      }
    }
    stage('build') {
      steps {
        echo 'Run npm install'
        sh 'npm install'
      }
    }
    stage('test') {
      steps {
        echo 'Run test'
        sh 'npm test'
      }
    }
  }
}