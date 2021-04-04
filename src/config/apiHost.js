/*
 * @Description:
 * @Version:
 * @Author: helloSun
 * @Date: 2020-05-20 15:40:39
 * @LastEditors: liuhaitao
 * @LastEditTime: 2021-04-04 15:57:28
 */
const gate = '//wechatgate.91160.com'

// 2020.01.14 修改
// DONE => weixin.91160.com/cube-data/ 修改为 wechatgate.91160.com/cube-data/v1/
// DONE => weixin.91160.com/statistics/ 修改为 wechatgate.91160.com/advert-stat/v1/
// DONE => weixin.91160.com/commerce/ 修改为 wechatgate.91160.com/commerce/v1/
// DONE => weixin.91160.com/comments/ 修改为 wechatgate.91160.com/comments/v1/
// DONE => weixin.91160.com/knowledge/ 修改为 wechatgate.91160.com/knowledge/v1/
// DONE => weixin.91160.com/user-activities/ 修改为 wechatgate.91160.com/user-activities/v2.0/
// DONE => weixin.91160.com/doctor-business/ 修改为 wechatgate.91160.com/doctor-business/v1/

let knowledge = ''
let commerce = ''
let cube = ''
let statistics = ''
let comments = ''
let userAct = ''
let doctorBus = ''
let guaHao = ''
let newDoctorBus = ''
let leaderBoard = ''
let patientWechat = ''
let userPoint = ''
let userActivities = ''

if (process.env.NODE_ENV == 'development') {
  cube = '/cube-data'
  comments = gate + '/comments'
  commerce = gate + '/commerce'
  knowledge = gate + '/knowledge'
  statistics = gate + '/advert-stat'
  userAct = gate + '/user-activities'
  doctorBus = gate + '/doctor-business'
  guaHao = gate + '/guahao'
  newDoctorBus = gate + '/doctor_business'
  leaderBoard = gate + '/leaderboard'
  patientWechat = gate + '/patient_wechat'
  userPoint = gate + '/user_point'
  userActivities = gate + '/user_activities'
}

if (process.env.NODE_ENV == 'test') {
  cube = gate + '/cube-data'
  comments = gate + '/comments'
  commerce = gate + '/commerce'
  knowledge = gate + '/knowledge'
  statistics = gate + '/advert-stat'
  userAct = gate + '/user-activities'
  doctorBus = gate + '/doctor-business'
  guaHao = gate + '/guahao'
  newDoctorBus = gate + '/doctor_business'
  leaderBoard = gate + '/leaderboard'
  patientWechat = gate + '/patient_wechat'
  userPoint = gate + '/user_point'
  userActivities = gate + '/user_activities'
}

if (process.env.NODE_ENV == 'production') {
  cube = gate + '/cube-data'
  comments = gate + '/comments'
  commerce = gate + '/commerce'
  knowledge = gate + '/knowledge'
  statistics = gate + '/advert-stat'
  userAct = gate + '/user-activities'
  doctorBus = gate + '/doctor-business'
  guaHao = gate + '/guahao'
  newDoctorBus = gate + '/doctor_business'
  leaderBoard = gate + '/leaderboard'
  patientWechat = gate + '/patient_wechat'
  userPoint = gate + '/user_point'
  userActivities = gate + '/user_activities'
}

export default {
  gate,
  cube,
  comments,
  commerce,
  knowledge,
  statistics,
  userAct,
  doctorBus,
  newDoctorBus,
  guaHao,
  leaderBoard,
  patientWechat,
  userPoint,
  userActivities
}
