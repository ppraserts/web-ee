<template>
    <div>
        <div id="search-form">
            <h4><icon name="pen"></icon> ตรวจสอบ และยกเลิกเงื่อนไขการตรวจสอบคุณสมบัติผู้มีสิทธิ์ลงทะเบียนสอบวัดความรู้ก่อนสำเร็จการศึกษา</h4>
            <h5>จัดการข้อมูล</h5>
            <div class="text-right">
                ผู้แก้ไขล่าสุด  นางสาว ญานิศา เขมรัฐสกุล  วันที่แก้ไขล่าสุด 06/09/2556 16:53:19
            </div>
            <b-form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ปีการศึกษา</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="2561">
                    </div>
                    <label class="col-sm-2 col-form-label">ภาคการศึกษา</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="1">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">สำนักวิชา</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="ศิลปศาสตร์">
                    </div>
                    <label class="col-sm-2 col-form-label">สาขาวิชา</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="ภาษาและวัฒนธรรมไทย">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ชื่อ - นามสกุล</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="MR.SHORA KIKUCHI">
                    </div>
                    <label class="col-sm-2 col-form-label">ชั้นปีที่</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="7">
                    </div>
                </div>
                 <div class="form-group row">
                    <label class="col-sm-2 col-form-label">คะแนนเฉลี่ยสะสม</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="2.10">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">จำนวนหน่วยกิตทั้งหมด</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="128">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">จำนวนหน่วยกิตที่ลงทะเบียนสอบ</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="170">
                    </div>
                    <label class="col-sm-2 col-form-label">จำนวนหน่วยกิตที่สอบผ่าน</label>
                    <div class="col-sm-2">
                        <input type="text" readonly class="form-control-plaintext" value="0">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">สถานะการลงทะเบียนสอบ</label>
                    <div class="col-sm-2">
                        <b-form-select class="form-control-plaintext" size="sm" ></b-form-select>
                    </div>
                </div>
            </b-form>
            <div id="button-group-form">
                <b-button variant="warning">บันทึก</b-button>
                <b-button variant="warning">กลับหน้าหลัก</b-button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data () {
        return {
            fieldsProcess: [ 'ลำดับ', 'รหัสประจำตัว', 'ชื่อ-นามสกุล', 'สำนักวิชา', 'สาขาวิชา', 'ชั้นปี'
            , 'คะแนนเฉลี่ย'
            ,'จำนวนวิชาที่สอบผ่าน/จำนวนครั้งที่สอบ'
            ,'สถานะการลงทะเบียน'
            ,'ประเภทการคิดค่าธรรมเนียม'
            ,'ผลการสอบ' ],
            itemsProcess: []
        }
    },
    created() {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>
<style lang="scss">
#search-form{
    background-color: #FFF;
    padding: 40px 40px 20px 40px;
}
#grid-form{
    background-color: #FFF;
    padding: 0px 40px 40px 40px;
}
#button-group-form{
    text-align: center;
}
h4{
    border-bottom: 1px solid #eee;
    padding-bottom: 9px;
}
.nav-link.active {
    background-color: orange !important;
    color:#000 !important;
}
.nav-link{
    background-color: #ccc !important; 
    color:#000 !important;
}
th{
    background-color: orange;
    text-align: center;
}
</style>
