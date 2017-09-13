pipeline {
  agent {
    docker {
      image 'node:8.0.0'
    }
  }
  stages {
    stage('git pull') {
      steps {
        checkout scm
      }
    }
    stage('build') {
      steps {
        echo 'Run npm install'
        sh 'whoami'
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