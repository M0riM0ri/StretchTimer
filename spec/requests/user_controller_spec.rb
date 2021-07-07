describe TimerController do

  it "assigns the requested article to @article" do
    article = create(:article)
    get :show, id: article
    expect(assigns(:article)).to eq article
  end
  
end