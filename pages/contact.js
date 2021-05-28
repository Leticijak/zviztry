import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css'

export default function ContactPage() {
  return (
    <>
      <Layout>
        <div className='jumbo contacts'>
          <div class='text-center'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className={styles.black}>CONTACT US</h1>
          </div>
        </div>
        <div class='container-fluid'>
          <div class='container content my-5'>
            <p class='lead'>
              Leave us a message and feel free to ask any question
            </p>
            <p class=''>We will quickly and promptly respond to your message</p>

            <form action='https://formspree.io/f/xnqlpaol' method='POST'>
              <div class='form-group'>
                <label>Name</label>
                <input type='text' class='form-control' />
              </div>

              <div class='form-group'>
                <label>E-mail</label>
                <input type='email' name='_replyto' class='form-control' />
              </div>
              <p class=''>Number of plots you are interested in ?</p>
              <div class='form-group ml-2'>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    name='q5check_1'
                    id='q5check_1'
                    value='1-10'
                  />
                  <label class='form-check-label' for='q5check_2'>
                    {' '}
                    1-10{' '}
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    name='q5check_2'
                    id='q5check_2'
                    value='10-50'
                  />
                  <label class='form-check-label' for='q5check_1'>
                    {' '}
                    10-50{' '}
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    name='q5check_3'
                    id='q5check_3'
                    value='50-100'
                  />
                  <label class='form-check-label' for='q5check_3'>
                    {' '}
                    50-100{' '}
                  </label>
                </div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    name='q5check_4'
                    id='q5check_4'
                    value='100+'
                  />
                  <label for='q5check_4'> 100 + </label>
                </div>
              </div>

              <div class='form-group'>
                <label>Message</label>
                <textarea
                  rows='3'
                  class='form-control'
                  name='message'
                ></textarea>
              </div>
              <div class='my-5'>
                <button type='sumbit'>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}
