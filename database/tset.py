import sqlite3
import pandas as pd

def sqlite_to_excel(db_path, excel_path):
    """
    将 SQLite 数据库中的所有表导出到 Excel 文件（每个表一个 sheet）
    :param db_path: SQLite 数据库文件路径
    :param excel_path: 输出的 Excel 文件路径
    """
    # 连接数据库
    conn = sqlite3.connect(db_path)
    
    # 获取所有表名
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = [row[0] for row in cursor.fetchall()]
    
    # 如果没有表，提示并退出
    if not tables:
        print("数据库中没有找到表。")
        conn.close()
        return
    
    # 使用 ExcelWriter 可以写入多个 sheet
    with pd.ExcelWriter(excel_path, engine='openpyxl') as writer:
        for table in tables:
            # 读取表数据
            df = pd.read_sql_query(f"SELECT * FROM {table}", conn)
            # 写入 Excel，sheet 名称为表名（Excel 工作表名长度限制为31字符，可截断）
            sheet_name = table[:31]  # 避免 sheet 名称过长
            df.to_excel(writer, sheet_name=sheet_name, index=False)
            print(f"表 '{table}' 已写入 sheet '{sheet_name}'，共 {len(df)} 行。")
    
    conn.close()
    print(f"转换完成！Excel 文件保存至：{excel_path}")

# 使用示例
if __name__ == "__main__":
    sqlite_to_excel("D:\\Astudyspace\\gitee\\auto_crawl_tool\\database\\job.db", "D:\\Astudyspace\\gitee\\auto_crawl_tool\\database\\output.xlsx")