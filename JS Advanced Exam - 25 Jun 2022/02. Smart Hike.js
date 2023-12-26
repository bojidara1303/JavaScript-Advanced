class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals[peak] = Number(altitude)
            return `You have successfully added a new goal - ${peak}`
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`)
        }

        if (this.goals[peak] && this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike")
        }

        let usedResources = time * 10;
        let diff = this.resources - usedResources;
        if (diff < 0) {
            return "You don't have enough resources to complete the hike"
        } else {
            this.resources -= usedResources;
            this.listOfHikes.push({ peak, time, difficultyLevel })
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
        }
    }

    rest(time) {
        this.resources += time * 10
        if (this.resources > 100) {
            this.resources === 100
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`

        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        }

        if (criteria == "easy" || criteria == "hard") {
            let hikesByCriteria = this.listOfHikes.filter((hike) => hike.difficultyLevel === criteria);
            let sortedHikes = hikesByCriteria.sort((a, b) => a.time - b.time);
            let bestPeak = sortedHikes[0];

            if(bestPeak == undefined){
                return `${this.username} has not done any ${criteria} hiking yet`
            } else {
                return `${this.username}'s best ${criteria} hike is ${bestPeak.peak} peak, for ${bestPeak.time} hours`
            }
        } else if(criteria === "all"){
            let result = ["All hiking records:"]
            this.listOfHikes.forEach((hike)=>
            result.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`))
            return result.join("\n")
        }
    }

}
