
class RacePositionModel{
    constructor(name, raceId, description, startTime, endTime, nVolunteers ,requiresLicense = false, licenseName = null){
        this.name = name
        this.raceId = raceId
        this.description = description
        this.startTime = startTime
        this.endTime = endTime
        this.nVolunteers = nVolunteers 
        this.requiresLicense = requiresLicense
        this.licenseName = licenseName
    }
}