interface Interviewer {
  askQuestions(): void;
}

class Developer implements Interviewer {
  askQuestions() {
    console.log("pattern test");
  }
}

class Designer implements Interviewer {
  askQuestions() {
    console.log("architecture quiz");
  }
}

abstract class HiringManager {
  abstract makeInterviewer(): Interviewer;
  takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
}

class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}

class DesignManager extends HiringManager {
  makeInterviewer() {
    return new Designer();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview();
