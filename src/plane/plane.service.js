import Plane from "./plane.model.js";

export class PlaneService {

  async findAllPlane(){
    return await Plane.findAll({ where: { status: true }})
  }

  async findOnePlane(id){
    return await Plane.findOne({
      where : {
        id,
        status: true
      },
    })
  }

  async createPlane(data) {
    return await Plane.create( data )
  }

  async updateCity(plane, data){
    return await plane.update(data)
  }

  async deleteCity(plane){
    return await plane.update({ status: false })
  }

}