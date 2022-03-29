import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form";
import {useNavigate} from "react-router-dom";
type Input={
  name: string,
  price: number,

}
type ProductsAddProps = {
  onAdd : (products : Input) => void
}

const AddProducts = (props: ProductsAddProps) => {
  const {register,handleSubmit,formState: {errors}} = useForm<Input>();
  const navigate = useNavigate();
  const onSubmit:SubmitHandler<Input> = (dataInput) =>{
    props.onAdd(dataInput);
    // chuyển trang
    navigate("/admin")
    }
  return (
    <div>
      <body>
        <div className="col-9">
          <form className=" d-flex row mx-5 my-3" method="post"  id="form" action='' onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center bg-light py-3">
              <img src="" width="15%" id="img-preview" />
            </div>

            <div className="col-9 ">
              <input type="hidden" name="ma_tai_khoan" />

                <div className="form-label-group">
                  <label htmlFor="inputEmail mb-5">Tên sản phẩm</label>
                  <input type="text" id="name" className="form-control my-2 bg-light" {...register("name")} placeholder=""  />

                </div>
                <div className="form-label-group">
                  <label htmlFor="inputPassword ">Giá</label>
                  <input type="text" id="price"  className="form-control my-2 bg-light" {...register("price")} placeholder="" />
                </div>
                <div className="form-label-group">
                  <label htmlFor="inputPassword ">mô tả</label>
                <input type="text" name="desc" id="desc" className="form-control my-2 bg-light" placeholder="" />
                  <div id="error1"></div>
                  <span></span>
                </div>
                <div className="form-label-group">
                  <label htmlFor="inputPassword ">Số lượng</label>
                  <input type="text" id="quantyti" name="quantyti" className="form-control my-2 bg-light" placeholder="" />
                  <div id="error2"></div>
                  <span></span>
                </div>

                <button className="btn  btn-success btn-md my-4" type="submit" name="profile">Thêm sản phẩm</button>
            </div>
            <div className="col-2 text-center mt-3 ms-5 ">

              <div className="upload-btn-wrapper">
                <input type="file" name="hinh_anh" id="img" className="btn btn-success btn-sm mt-3 " />
              </div>
            </div>
          </form></div>

      </body>
    </div>
  )
}

export default AddProducts