class ContactsController < ApplicationController
  def new
    @contact = Contact.new
    render  :locals => { :error => "" }

  end

  # 確認画面
  def confirm
    @contact = Contact.new(contact_params)
    if @contact.invalid?
      render :new, :locals => { :error => "入力内容に不備があります" }
    end
  end
  
  # 戻る
  def back
    @contact = Contact.new(contact_params)
    render :new, :locals => { :error => "" }
  end

  # 送信
  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.send_mail(@contact).deliver_now
      redirect_to done_path
    else
      render :new
      render :new, :locals => { :error => "入力内容に不備があります" }
    end
  end

  # 完了
  def done
  end

  private

  def contact_params
    params.require(:contact)
          .permit(:email,
                  :name,
                  :message
                 )
  end
end
