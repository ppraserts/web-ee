<template>
    <div>
        <div id="search-form">
            <h4><icon name="pen"></icon> ตรวจสอบ และยกเลิกเงื่อนไขการตรวจสอบคุณสมบัติผู้มีสิทธิ์ลงทะเบียนสอบวัดความรู้ก่อนสำเร็จการศึกษา
</h4>
            <b-form>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ปีการศึกษา</label>
                    <div class="col-sm-2">
                        <b-form-select class="form-control-plaintext" size="sm"></b-form-select>
                    </div>
                    <label class="col-sm-2 col-form-label">ภาคการศึกษา</label>
                    <div class="col-sm-2">
                        <b-form-select class="form-control-plaintext" size="sm"></b-form-select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">สำนักวิชา</label>
                    <div class="col-sm-4">
                        <b-form-select class="form-control-plaintext" size="sm" ></b-form-select>
                    </div>
                    <label class="col-sm-2 col-form-label">สาขาวิชา</label>
                    <div class="col-sm-4">
                        <b-form-select class="form-control-plaintext" size="sm" ></b-form-select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">รหัสประจำตัว</label>
                    <div class="col-sm-10">
                        <div class="row">
                            <div class="col-sm-3"><b-form-input type="text"></b-form-input></div>
                            <label class="col-sm-5 col-form-label">xxxxxx xxxxxxxxxxxx</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ชั้นปี</label>
                    <div class="col-sm-2">
                        <b-form-select class="form-control-plaintext" size="sm"></b-form-select>
                    </div>
                </div>
            </b-form>
            <div id="button-group-form">
                <b-button variant="warning">ค้นหา</b-button>
                <b-button variant="warning">ยกเลิก</b-button>
            </div>
            <h5>การกำหนดการคิดค่าธรรมเนียมทั้งสาขาวิชา</h5>
            <div class="row">
                <div class="col-sm-8">ในกรณีที่ต้องการกำหนดการคิดค่าธรรมเนียมแบบพิเศษทั้งสาขาวิชา สามารถเลือกแบบ
 “พิเศษ” และกดปุ่ม “บันทึก” และมีผลในฐานข้อมูลจริง แต่จะต้องระบุสาขาวิชาใดวิชาหนึ่งเท่านั้น</div>
                <div class="col-sm-2">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                        <label class="form-check-label" for="inlineRadio1">ปกติ</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">พิเศษ</label>
                    </div>
                </div>
                <div class="col-sm-2">
                    <b-button variant="warning">บันทึก</b-button>
                </div>
            </div>
        </div>
        <div id="grid-form">
            <b-table bordered hover :items="itemsProcess" :fields="fieldsProcess"></b-table>
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
