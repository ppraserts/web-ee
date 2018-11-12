<template>
    <div>
        <div id="search-form">
            <h4><icon name="pen"></icon> นำเข้าผู้มีสิทธิ์ลงทะเบียนสอบจากฐานข้อมูลกลางได้</h4>
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
                <div class="form-group row">
                    <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            นักศึกษาที่คาดว่าจะสำเร็จการศึกษา ในภาคการศึกษานี้
                        </label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            นักศึกษาที่ลงทะเบียนเรียนครบทุกรายวิชา ยกเว้นรายวิชาสหกิจศึกษา
                        </label>
                        </div>
                    </div>
                    <div class="col-sm-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            นักศึกษาที่มีคะแนนเฉลี่ยสะสม (GPAX) <b-form-select class="form-control-plaintext" size="sm"></b-form-select>  2.00 ในภาคการศึกษาล่าสุดที่ผ่านมา
                        </label>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-3 col-form-label">ระบุอีเมล์สำหรับแจ้งเตือนการประมวลผล</label>
                    <div class="col-sm-3"><b-form-input type="text"></b-form-input></div>
                </div>
            </b-form>
            <div id="button-group-form">
                <b-button variant="warning">1.ประมวลผลผู้มีสิทธิ์ลงทะเบียนสอบ</b-button>
                <b-button variant="warning">2.ค้นหา</b-button>
                <b-button variant="warning">3.นำเข้าผู้มีสิทธิ์ลงทะเบียนสอบ</b-button>
                <b-button variant="warning">4.ค้นหาหลังนำเข้า</b-button>
                <b-button variant="warning">5.ยกเลิกการนำเข้า</b-button>
            </div>
        </div>
        <div id="grid-form">
            <b-tabs>
                <b-tab title="สถานะการประมวลผล" active>
                    <b-table bordered hover :items="itemsProcess" :fields="fieldsProcess"></b-table>
                </b-tab>
                <b-tab title="ค้นหาข้อมูล" >
                    <b-table bordered hover :items="itemsSearch" :fields="fieldsSearch"></b-table>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data () {
    return {
        fieldsProcess: [ 'ประมวลผล', 'เริ่มต้น', 'สิ้นสุด', 'สถานะ', 'อีเมล์', 'โดย', 'หมายเหตุ' ],
        itemsProcess: [],
        fieldsSearch: [ 'ลำดับ', 'รหัสประจำตัว', 'ชื่อ-นามสกุล', 'สำนักวิชา', 'สาขาวิชา', 'ชั้นปี', 'คะแนนเฉลี่ย','สถานะ' ],
        itemsSearch: []
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
