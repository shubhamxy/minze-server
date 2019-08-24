import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import { resetPassword } from '../../../services/user'

@Form.create()
class Register extends Component {
  onSubmit = event => {
    event.preventDefault()
    const { form, history } = this.props
    form.validateFields((error, values) => {
      if (!error) {
        resetPassword(values.email).then(() => {
          history.push('/')
        })
      }
    })
  }

  render() {
    const { form } = this.props
    return (
      <div>
        <Helmet title="Forgot" />
        <div className={styles.block}>
          <div className="row">
            <div className="col-xl-12">
              <div className={styles.inner}>
                <div className={styles.form}>
                  <h4 className="text-uppercase">
                    <strong>Restore Password</strong>
                  </h4>
                  <br />
                  <Form layout="vertical" hideRequiredMark onSubmit={this.onSubmit}>
                    <Form.Item label="Email">
                      {form.getFieldDecorator('email', {
                        initialValue: '',
                        rules: [{ required: true, message: 'Please input email' }],
                      })(<Input size="default" />)}
                    </Form.Item>
                    <div className="mb-2">
                      <Link to="/user/login" className="utils__link--blue utils__link--underlined">
                        Back to login
                      </Link>
                    </div>
                    <div className="form-actions">
                      <Button
                        type="primary"
                        className="width-150 mr-4"
                        htmlType="submit"
                        loading={false}
                        onClick={this.onSubmit}
                      >
                        Restore Password
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
