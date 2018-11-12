<template>
  <div class="sidenav">
    <div class="logo"><img src="../assets/logo2.png" width="55" height="90"> Exit Exam</div>
    <a href="#"><icon name="search"></icon> ตรวจสอบข้อมูลนักศึกษา</a>
    <a v-b-toggle.collapse01 href="#"><icon name="save"></icon> ระบบบันทึกข้อมูลพื้นฐาน</a>
    <b-collapse id="collapse01">
        <router-link to="/examtime"><icon name="circle-notch"></icon> บันทึกจำนวนครั้งที่จัดสอบ</router-link>
    </b-collapse>
    <a href="#"><icon name="book"></icon> ระบบเปิดรายวิชา</a>
    <a v-b-toggle.collapse03 href="#"><icon name="pen"></icon> ระบบลงทะเบียนสอบ</a>
    <b-collapse id="collapse03">
        <router-link to="/import"><icon name="circle-notch"></icon> นำเข้าผู้มีสิทธิ์ลงทะเบียนสอบจากฐานข้อมูลกลาง</router-link>
        <router-link to="/process"><icon name="circle-notch"></icon> ตรวจสอบ และยกเลิกเงื่อนไขการตรวจสอบคุณสมบัติผู้มีสิทธิ์ลงทะเบียนสอบวัดความรู้ก่อนสำเร็จการศึกษา</router-link>
    </b-collapse>
    <a href="#"><icon name="database"></icon> ระบบประมวลผล</a>
    <a href="#"><icon name="chart-bar"></icon> รายงานในระบบลงทะเบียนสอบ</a>
    <a href="#"><icon name="chart-line"></icon> รายงานในระบบประมวลผล</a>
    <a href="#"><icon name="external-link-alt"></icon> กลับสู่ระบบ Exit Exam เดิม</a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background: #ea2707;
    background-image: linear-gradient(45deg,#ea2707,#ffca28);
    overflow: hidden;
    transition: 0.5s;
    a {
        padding: 12px 5px 12px 15px;
        text-decoration: none;
        font-size: 15px;
        color: #fff;
        display: block;
        transition: 0.3s;
    }
    a:hover {
        /* color: #f1f1f1; */
        color: #fff;
        background: rgba(10, 24, 35, 0.26);
        border-left-color: #fff
    }
    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }
    div > a{
        padding-left:40px;
    }
    svg{
        margin-right: 10px;
    }
    .logo{
        color: #fff !important;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: .05em;
        line-height: 100px;
        text-transform: uppercase;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.22);
        box-shadow: inset 0 -1px 0px rgba(0, 0, 0, 0.1);
    }
}
</style>