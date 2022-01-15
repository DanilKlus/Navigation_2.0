const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Video = sequelize.define('video', {
    number: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    adding_date: {type: DataTypes.STRING},
    can_comment: {type: DataTypes.STRING},
    can_like: {type: DataTypes.STRING},
    can_repost: {type: DataTypes.STRING},
    can_subscribe: {type: DataTypes.STRING},
    can_add_to_faves: {type: DataTypes.STRING},
    can_add: {type: DataTypes.STRING},
    comments: {type: DataTypes.STRING},
    date: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    duration: {type: DataTypes.STRING},
    photo_130: {type: DataTypes.STRING},
    photo_320: {type: DataTypes.STRING},
    photo_640: {type: DataTypes.STRING},
    photo_800: {type: DataTypes.STRING},
    photo_1280: {type: DataTypes.STRING},
    first_frame_130: {type: DataTypes.STRING},
    first_frame_160: {type: DataTypes.STRING},
    first_frame_320: {type: DataTypes.STRING},
    first_frame_800: {type: DataTypes.STRING},
    first_frame_1280: {type: DataTypes.STRING},
    width: {type: DataTypes.STRING},
    height: {type: DataTypes.STRING},
    id: {type: DataTypes.STRING, unique: true},
    owner_id: {type: DataTypes.STRING},
    user_id: {type: DataTypes.STRING},
    ov_id: {type: DataTypes.STRING},
    title: {type: DataTypes.STRING},
    player: {type: DataTypes.STRING},
    views: {type: DataTypes.STRING},
    is_mobile_live: {type: DataTypes.STRING},
    local_views: {type: DataTypes.STRING},
    platform: {type: DataTypes.STRING},
    live: {type: DataTypes.STRING},
    upcoming: {type: DataTypes.STRING},
    live_start_time: {type: DataTypes.STRING},
    live_notify: {type: DataTypes.STRING},
    createdAt: {type: DataTypes.STRING},
    updatedAt: {type: DataTypes.STRING}

})
module.exports = {
    Video
}





