import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Input } from "./components/ui/input";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#DCDCDC] flex flex-row items-center justify-center py-12 px-2">
      {/* 左カラム：メッセージエリア */}
      <Card className="flex flex-col justify-between min-h-[700px] w-[400px] max-w-[400px] p-0 bg-[#464748] rounded-3xl shadow-xl border-none mr-6">
        <div className="flex flex-col gap-8 px-8 pt-8 pb-0">
          <div className="flex justify-end mb-4">
            <div className="bg-[#6E3D7E] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg max-w-[80%] text-right leading-tight">送信したメッセージ</div>
          </div>
          <div className="flex justify-start mb-4">
            <div className="bg-[#6E3D7E] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg max-w-[80%] text-left leading-tight">AIからの回答</div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[#6E3D7E] text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg max-w-[80%] text-right leading-tight">送信したメッセージ</div>
          </div>
        </div>
        <div className="flex gap-2 w-full bg-[#DCDCDC] rounded-b-3xl items-center px-6 py-6 mt-8">
          <Input className="flex-1 h-14 rounded-full border border-[#D9D9D9] px-6 text-xl bg-white font-medium placeholder:text-[#888] text-center" placeholder="ユーザーの入力メッセージ" />
          <Button className="bg-[#DCDCDC] text-black px-6 py-3 rounded-2xl text-xl font-bold shadow-none border border-[#D9D9D9]">Send</Button>
        </div>
      </Card>
      {/* 中央カラム：Markdownエリア */}
      <Card className="flex flex-col items-center justify-center min-h-[700px] w-[400px] max-w-[400px] mx-6 bg-[#464748] rounded-3xl shadow-xl border-none">
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-[400px] h-[600px] bg-[#DCDCDC] text-black text-3xl font-medium text-center leading-tight whitespace-pre-line items-center justify-center flex flex-col ">
            {`作成された\nMarkdown\n（Marpで作成）`}
          </div>
        </div>
      </Card>
      {/* 右カラム：スライドプレビューエリア */}
      <Card className="flex flex-col justify-between min-h-[700px] w-[400px] max-w-[400px] p-8 bg-[#464748] rounded-3xl shadow-xl border-none ml-6">
        <div className="flex flex-col gap-6 h-full justify-center">
          <div className="bg-[#D9D9D9] rounded-xl h-24 flex items-center justify-center text-black text-2xl font-medium">スライドのプレビュー１</div>
          <div className="bg-[#D9D9D9] rounded-xl h-24 flex items-center justify-center text-black text-2xl font-medium">スライドのプレビュー２</div>
          <div className="bg-[#D9D9D9] rounded-xl h-24 flex items-center justify-center text-black text-2xl font-medium">スライドのプレビュー３</div>
          <div className="bg-[#D9D9D9] rounded-xl h-24 flex items-center justify-center text-black text-2xl font-medium">スライドのプレビュー４</div>
        </div>
      </Card>
    </div>
  );
}

export default App;
