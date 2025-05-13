import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#444444] flex flex-col items-center justify-center p-8">
      <Card className="w-full max-w-4xl p-8 bg-[#DCDCDC] shadow-xl">
        <div className="flex flex-col gap-4 items-center">
          <Button className="bg-[#6E3D7E] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg">送信したメッセージ</Button>
          <Button className="bg-[#6E3D7E] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg">AIからの回答</Button>
          <Button className="bg-[#6E3D7E] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg">送信したメッセージ</Button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <div className="w-40 h-24 bg-[#D9D9D9] rounded-lg flex items-center justify-center mb-2">
              <span className="text-black text-2xl font-medium">スライドのプレビュー１</span>
            </div>
            <div className="w-40 h-24 bg-[#D9D9D9] rounded-lg flex items-center justify-center mb-2">
              <span className="text-black text-2xl font-medium">スライドのプレビュー２</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-40 h-24 bg-[#D9D9D9] rounded-lg flex items-center justify-center mb-2">
              <span className="text-black text-2xl font-medium">スライドのプレビュー３</span>
            </div>
            <div className="w-40 h-24 bg-[#D9D9D9] rounded-lg flex items-center justify-center mb-2">
              <span className="text-black text-2xl font-medium">スライドのプレビュー４</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <div className="w-full max-w-md bg-[#C4C8D2] rounded-lg p-4 mb-4">
            <span className="block text-black text-3xl font-medium text-center">作成された<br/>Markdown<br/>（Marpで作成）</span>
          </div>
          <div className="flex gap-4 w-full max-w-md">
            <input className="flex-1 h-12 rounded-full border border-[#D9D9D9] px-4 text-lg" placeholder="ユーザーの入力メッセージ" />
            <Button className="bg-[#6E3D7E] text-white px-8 py-2 rounded-full text-lg font-bold shadow-lg">Send</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
