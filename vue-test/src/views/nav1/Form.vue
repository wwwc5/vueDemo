<template>
  <Form :model="formItem" class="formContainer" :label-width="80" >
    <FormItem label="活动名称">
      <Input v-model="formItem.input" class="formInput"></Input>
    </FormItem>
    <FormItem label="活动区域">
      <Select v-model="formItem.select" class="formSelect">
        <Option value="beijing">区域一</Option>
        <Option value="shanghai">区域二</Option>
      </Select>
    </FormItem>
    <FormItem label="活动时间">
      <DatePicker type="date" v-model="formItem.date" class="formDate"></DatePicker>
      <TimePicker type="time" v-model="formItem.time" class="formTime"></TimePicker>
    </FormItem>
    <FormItem label="特殊活动">
      <RadioGroup v-model="formItem.radio" class="formRadio">
        <Radio label="线上品牌赞助">线上品牌赞助</Radio>
        <Radio label="线下场地免费">线下场地免费</Radio>
        <Radio label="无">无</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="活动性质">
      <CheckboxGroup v-model="formItem.checkbox" class="formCheckbox">
        <Checkbox label="美食/餐厅线上活动"></Checkbox>
        <Checkbox label="地推活动"></Checkbox>
        <Checkbox label="线下主题活动"></Checkbox>
        <Checkbox label="单纯品牌曝光"></Checkbox>
      </CheckboxGroup>
    </FormItem>
    <FormItem label="即时配送">
      <i-switch v-model="formItem.switch" size="large" class="formSwitch">
        <span slot="open">是</span>
        <span slot="close">否</span>
      </i-switch>
    </FormItem>
    <FormItem label="人数范围">
      <Slider v-model="formItem.slider" range class="formSlider"></Slider>
    </FormItem>
    <FormItem label="活动流程">
      <Input v-model="formItem.textarea" class="formTextarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}"></Input>
    </FormItem>
    <FormItem>
      <Button type="primary">确认</Button>
      <Button style="margin-left: 8px">取消</Button>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .formContainer{
    padding: 20px;
    overflow: hidden;
    .formInput{
      width: 50%;
    }
    .formSelect{
      width: 50%;
    }
    .formDate{
      margin-right: 20px;
    }
    .formSlider{
      width: 50%;
    }
    .formTextarea{
      width: 50%;
    }
  }
</style>
