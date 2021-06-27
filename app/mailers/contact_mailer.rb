class ContactMailer < ApplicationMailer
  def send_mail(contact)
    @contact = contact
    mail to: ENV['TOMAIL'], subject: '【Stretch Timer】問い合わせ'
  end
end
