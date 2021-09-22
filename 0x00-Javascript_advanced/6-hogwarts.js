class studentHogwarts {
    privateScore = 0;
    name = null;

    changeScoreBy(points) {
        return (points + this.privateScore);
    }

    setName(newName) {
        this.name = newName;
    }

    rewardStudent() {
        return this.changeScoreBy(1);
    }

    penalizeStudent() {
        return this.changeScoreBy(-1);
    }

    getScore() {
        return this.name.concat(": ", this.privateScore);
    }
}

let harry = new studentHogwarts;
harry.setName("Harry");
harry.changeScoreBy(4);
console.log(harry.getScore());

let draco = new studentHogwarts;
draco.setName("Draco");
draco.rewardStudent();
draco.changeScoreBy(-3);
console.log(draco.getScore());
