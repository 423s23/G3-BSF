
export class RacePositionModel {
    constructor(positionId, name, raceId, description, startTime, endTime, nVolunteers, requiresLicense, licenseName) {
        this.positionId = positionId
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
 